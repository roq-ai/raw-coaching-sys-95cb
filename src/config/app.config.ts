interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Institute Owner'],
  customerRoles: ['Student'],
  tenantRoles: ['Institute Owner', 'Tutor'],
  tenantName: 'Institute',
  applicationName: 'RAW Coaching System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Register on the platform',
    'Manage classes and payments',
    'Search for institutes and tutors',
    'Enroll in online classes and view schedule',
  ],
  ownerAbilities: [
    'Register institute on the platform',
    "Manage institute's activities",
    'Manage tutors',
    'Invite tutors to join the institute',
  ],
};
