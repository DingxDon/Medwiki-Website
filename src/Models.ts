export interface DiseaseResponse {
    disease: string;
    similarity_score:number;
}

export interface DiseaseDBdataInter {
    disease:string;
    id:number;
}

export interface MergeDiseaseData {
    disease:string;
    id:number;
    similarity_score:number;
}

export interface MediResponse {
    medicine: string;
    similarity_score:number;
}

export interface MediDBdataInter {
    medicine:string;
    id:number;
}

export interface MergeMedicineData {
    medicine:string;
    id:number;
    similarity_score:number;
}