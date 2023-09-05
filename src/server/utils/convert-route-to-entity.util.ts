const mapping: Record<string, string> = {
  renamedclasses: 'Renamedclass',
  enrollments: 'enrollment',
  institutes: 'institute',
  students: 'student',
  tutors: 'tutor',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
