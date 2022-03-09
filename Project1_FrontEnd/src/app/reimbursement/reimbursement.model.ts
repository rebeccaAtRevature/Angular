export interface Reimbursement {
    reimbursementId: number;
	resolvedReimbursementId?: number;
	requestingEmployeeId: number;
	reimbursementAmount: number;
	reimbursementPending?: boolean;
	requestApproved?: boolean;
	dateOfRequest?: string;
    dateResolved?: string;
}