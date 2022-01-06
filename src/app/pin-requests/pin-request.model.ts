export interface PinRequest {
    $key: string;
    parentOrgName: string;
    parentCageCode: string;
    divisionName: string;
    divisionCageCode: string;
    replacement: boolean;
}