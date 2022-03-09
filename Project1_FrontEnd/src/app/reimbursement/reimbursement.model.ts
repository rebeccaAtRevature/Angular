export interface Reimbursement {
    reimbursementId: number;
	resolvedReimbursementId?: number;
	requestingEmployeeId: number;
	reimbursementAmount: number;
	requestApproved?: boolean;
	dateOfRequest?: string;
    dateResolved?: string;
}