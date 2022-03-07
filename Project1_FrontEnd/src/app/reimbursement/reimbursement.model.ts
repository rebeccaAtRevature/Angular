export interface Reimbursement {
    reimbusermentId: number;
	requestingEmployeeId: number;
	reimbursementAmount: number;
	requestApproved?: boolean;
	dateOfRequest: string;
    dateResolved?: string;
}