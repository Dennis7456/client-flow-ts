import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';

enum maritalStatusType {
  MARRIED = 'MARRIED',
  SINGLE = 'SINGLE',
  DIVORCED = 'DIVORCED'
}

enum approvalStatusType {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  APPROVED = 'APPROVED'
}

export interface Clients {
  name: string;
  dob: string;
  marital_status: maritalStatusType;
  approval_status: approvalStatusType;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
}

const CLIENT_DATA: Clients[] = [
  { name: "Dr. Tanner Renner", dob: '1977-08-30', marital_status: maritalStatusType.MARRIED, approval_status: approvalStatusType.APPROVED, created_by: 5, updated_by: 4, created_at: '2024-02-28T16:36:05.000000Z', updated_at: '2024-02-28T16:36:05.000000Z' },
  { name: "Prof. Alanis Miller DDS", dob: "1991-03-18", marital_status: maritalStatusType.DIVORCED, approval_status: approvalStatusType.PENDING, created_by: 8, updated_by: 9, created_at: "2024-02-28T16:36:05.000000Z", updated_at: "2024-02-28T16:36:05.000000Z" },
  { name: "Dr. Tanner Renner", dob: '1977-08-30', marital_status: maritalStatusType.MARRIED, approval_status: approvalStatusType.APPROVED, created_by: 5, updated_by: 4, created_at: '2024-02-28T16:36:05.000000Z', updated_at: '2024-02-28T16:36:05.000000Z' },
  { name: "Prof. Alanis Miller DDS", dob: "1991-03-18", marital_status: maritalStatusType.DIVORCED, approval_status: approvalStatusType.PENDING, created_by: 8, updated_by: 9, created_at: "2024-02-28T16:36:05.000000Z", updated_at: "2024-02-28T16:36:05.000000Z" },
  { name: "Dr. Tanner Renner", dob: '1977-08-30', marital_status: maritalStatusType.MARRIED, approval_status: approvalStatusType.APPROVED, created_by: 5, updated_by: 4, created_at: '2024-02-28T16:36:05.000000Z', updated_at: '2024-02-28T16:36:05.000000Z' },
  { name: "Prof. Alanis Miller DDS", dob: "1991-03-18", marital_status: maritalStatusType.DIVORCED, approval_status: approvalStatusType.PENDING, created_by: 8, updated_by: 9, created_at: "2024-02-28T16:36:05.000000Z", updated_at: "2024-02-28T16:36:05.000000Z" },
  { name: "Dr. Tanner Renner", dob: '1977-08-30', marital_status: maritalStatusType.MARRIED, approval_status: approvalStatusType.APPROVED, created_by: 5, updated_by: 4, created_at: '2024-02-28T16:36:05.000000Z', updated_at: '2024-02-28T16:36:05.000000Z' },
  { name: "Prof. Alanis Miller DDS", dob: "1991-03-18", marital_status: maritalStatusType.DIVORCED, approval_status: approvalStatusType.PENDING, created_by: 8, updated_by: 9, created_at: "2024-02-28T16:36:05.000000Z", updated_at: "2024-02-28T16:36:05.000000Z" },
  { name: "Dr. Tanner Renner", dob: '1977-08-30', marital_status: maritalStatusType.MARRIED, approval_status: approvalStatusType.APPROVED, created_by: 5, updated_by: 4, created_at: '2024-02-28T16:36:05.000000Z', updated_at: '2024-02-28T16:36:05.000000Z' },
  { name: "Prof. Alanis Miller DDS", dob: "1991-03-18", marital_status: maritalStatusType.DIVORCED, approval_status: approvalStatusType.PENDING, created_by: 8, updated_by: 9, created_at: "2024-02-28T16:36:05.000000Z", updated_at: "2024-02-28T16:36:05.000000Z" },
  { name: "Dr. Tanner Renner", dob: '1977-08-30', marital_status: maritalStatusType.MARRIED, approval_status: approvalStatusType.APPROVED, created_by: 5, updated_by: 4, created_at: '2024-02-28T16:36:05.000000Z', updated_at: '2024-02-28T16:36:05.000000Z' },
  { name: "Prof. Alanis Miller DDS", dob: "1991-03-18", marital_status: maritalStatusType.DIVORCED, approval_status: approvalStatusType.PENDING, created_by: 8, updated_by: 9, created_at: "2024-02-28T16:36:05.000000Z", updated_at: "2024-02-28T16:36:05.000000Z" },
]

@Component({
  selector: 'app-clients-table',
  standalone: true,
  imports: [MatTableModule, MatCheckboxModule],
  templateUrl: './clients-table.component.html',
  styleUrl: './clients-table.component.css'
})
export class ClientsTableComponent {
  displayedColumns: string[] = ['name', 'dob', 'marital_status', 'approval_status', 'created_by', 'updated_by', 'created_at', 'updated_at', 'approved'];
  dataSource = CLIENT_DATA;
}
