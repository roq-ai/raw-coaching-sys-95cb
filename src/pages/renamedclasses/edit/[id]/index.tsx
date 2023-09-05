import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
  Center,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState, useRef } from 'react';
import * as yup from 'yup';
import useSWR from 'swr';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { ImagePicker } from 'components/image-file-picker';
import { getRenamedclassById, updateRenamedclassById } from 'apiSdk/renamedclasses';
import { renamedclassValidationSchema } from 'validationSchema/renamedclasses';
import { RenamedclassInterface } from 'interfaces/renamedclass';
import { TutorInterface } from 'interfaces/tutor';
import { InstituteInterface } from 'interfaces/institute';
import { getTutors } from 'apiSdk/tutors';
import { getInstitutes } from 'apiSdk/institutes';

function RenamedclassEditPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const { data, error, isLoading, mutate } = useSWR<RenamedclassInterface>(
    () => (id ? `/renamedclasses/${id}` : null),
    () => getRenamedclassById(id),
  );
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values: RenamedclassInterface, { resetForm }: FormikHelpers<any>) => {
    setFormError(null);
    try {
      const updated = await updateRenamedclassById(id, values);
      mutate(updated);
      resetForm();
      router.push('/renamedclasses');
    } catch (error: any) {
      if (error?.response.status === 403) {
        setFormError({ message: "You don't have permisisons to update this resource" });
      } else {
        setFormError(error);
      }
    }
  };

  const formik = useFormik<RenamedclassInterface>({
    initialValues: data,
    validationSchema: renamedclassValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Renamedclasses',
              link: '/renamedclasses',
            },
            {
              label: 'Update Renamedclass',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Update Renamedclass
          </Text>
        </Box>
        {(error || formError) && (
          <Box mb={4}>
            <Error error={error || formError} />
          </Box>
        )}

        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.subject}
            label={'Subject'}
            props={{
              name: 'subject',
              placeholder: 'Subject',
              value: formik.values?.subject,
              onChange: formik.handleChange,
            }}
          />

          <FormControl id="date_time" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Date Time
            </FormLabel>
            <DatePicker
              selected={formik.values?.date_time ? new Date(formik.values?.date_time) : null}
              onChange={(value: Date) => formik.setFieldValue('date_time', value)}
            />
          </FormControl>

          <NumberInput
            label="Duration"
            formControlProps={{
              id: 'duration',
              isInvalid: !!formik.errors?.duration,
            }}
            name="duration"
            error={formik.errors?.duration}
            value={formik.values?.duration}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('duration', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <AsyncSelect<TutorInterface>
            formik={formik}
            name={'tutor_id'}
            label={'Select Tutor'}
            placeholder={'Select Tutor'}
            fetcher={getTutors}
            labelField={'qualification'}
          />
          <AsyncSelect<InstituteInterface>
            formik={formik}
            name={'institute_id'}
            label={'Select Institute'}
            placeholder={'Select Institute'}
            fetcher={getInstitutes}
            labelField={'name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/renamedclasses')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'Renamedclass',
    operation: AccessOperationEnum.UPDATE,
  }),
)(RenamedclassEditPage);
