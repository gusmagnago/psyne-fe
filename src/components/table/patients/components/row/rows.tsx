import type { ITableCellProps } from '@psycron/components/table/components/table-cell/TableCell.types';

import type { IPatientsTableData } from '../../PatientsTable.types';

export const transformPatientsData = (
  data: IPatientsTableData[]
): ITableCellProps[][] => {
  return data.map((row) => [
    { id: row.id, label: row.fullName, numeric: false, isPatients: true },
    {
      id: row.id,
      label: row.nextSession,
      numeric: false,
      isPatients: true,
    },
    {
      id: row.id,
      label: row.paymentStatus,
      numeric: false,
      icon: true,
      isPatients: true,
    },
    {
      id: row.id,
      label: String(row.sessionsPerMonth),
      numeric: true,
      isPatients: true,
    },
    {
      id: row.id,
      label: String(row.sessionVal),
      numeric: true,
      isPatients: true,
    },
    {
      id: row.id,
      label: row.hasDiscount ? 'Yes' : 'No',
      numeric: false,
      isPatients: true,
    },
    {
      id: row.id,
      label: String(row.discountVal),
      numeric: true,
      isPatients: true,
    },
    {
      id: row.id,
      label: String(row.fullAmount),
      numeric: true,
      isPatients: true,
    },
    { id: row.id, label: row.currency, numeric: false, isPatients: true },
    {
      id: row.id,
      label: row.latestPayment,
      numeric: false,
      isPatients: true,
    },
    {
      id: row.id,
      label: '',
      numeric: false,
      isPatients: true,
      action: true,
    },
  ]);
};

export const createDataRows = (
  fullName: string,
  nextSession: string,
  paymentStatus: string,
  sessionsPerMonth: number,
  sessionVal: number,
  hasDiscount: boolean,
  discountVal: number,
  fullAmount: number,
  currency: string,
  latestPayment: string,
  id: string,
  actions: string
): IPatientsTableData => {
  return {
    fullName,
    nextSession,
    paymentStatus,
    sessionsPerMonth,
    sessionVal,
    hasDiscount,
    discountVal,
    fullAmount,
    currency,
    latestPayment,
    id,
    actions,
  };
};

export const patientsTablerowsData = [
  createDataRows(
    'Jupiter Magnago Ferraz',
    '2024-07-04T15:00:00',
    'paid',
    100,
    5,
    false,
    0,
    500,
    'EUR',
    '2024-06-04T15:00:00',
    'gxchjkhljkçjhgchvhbnm,~',
    '  '
  ),
  createDataRows(
    'Jupiter Magnago Ferraz',
    '2024-07-04T16:00:00',
    'paid',
    100,
    5,
    false,
    0,
    500,
    'EUR',
    '2024-06-04T17:00:00',
    'gxchjkhljkçjhgchvhbnm,~',
    '  '
  ),
  createDataRows(
    'Jupiter Magnago Ferraz',
    '2024-07-04T18:00:00',
    'paid',
    100,
    5,
    false,
    0,
    500,
    'EUR',
    '2024-06-04T19:00:00',
    'gxchjkhljkçjhgchvhbnm,~',
    '  '
  ),
  createDataRows(
    'Jupiter Magnago Ferraz',
    '2024-07-04T15:00:00',
    'paid',
    100,
    5,
    false,
    0,
    500,
    'EUR',
    '2024-06-04T15:00:00',
    'gxchjkhljkçjhgchvhbnm,~',
    '  '
  ),
  createDataRows(
    'Jupiter Magnago Ferraz',
    '2024-07-04T16:00:00',
    'paid',
    100,
    5,
    false,
    0,
    500,
    'EUR',
    '2024-06-04T17:00:00',
    'gxchjkhljkçjhgchvhbnm,~',
    '  '
  ),
  createDataRows(
    'Jupiter Magnago Ferraz',
    '2024-07-04T18:00:00',
    'paid',
    100,
    5,
    false,
    0,
    500,
    'EUR',
    '2024-06-04T19:00:00',
    'gxchjkhljkçjhgchvhbnm,~',
    '  '
  ),
];
