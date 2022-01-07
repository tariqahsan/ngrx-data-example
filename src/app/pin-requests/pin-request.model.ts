export interface PinRequest {
    id: string;
    parentOrgName: string;
    parentCageCode: string;
    divisionName: string;
    divisionCageCode: string;
    replacement: boolean;
}