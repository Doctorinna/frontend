interface Range {
    id: number;
    min: number;
    max: number;
}
interface Option {
    id: number;
    answer: string;
}

export interface QuestionType{
    id: number;
    description: string;
    class: string;//todo change later
    range: Range[];
    options: Option[];
}

export interface DiseaseType {
    id: number;
    illness: string;
    description: string;
}

export interface Answer {
    question: string;
    answer: string;
}
export interface Recommendation {
    disease: DiseaseType;
    risk_factor: number
    prescription: string
}
export interface Result {
    recommendation: Recommendation[]
}