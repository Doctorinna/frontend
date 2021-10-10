interface Range {
    id: number;
    min: number;
    max: number;
}

interface Region {
    region: string;
    avg_factor: number;
}

interface LocalRegion {
    label: string;
    count: number;
}

export interface Option {
    id: number;
    answer: string;
}

interface Category {
    id: number;
    title: string
}
export interface QuestionType{
    id: number;
    description: string;
    category: Category;
    range: Range | null;
    options: Option[];
}

export interface DiseaseType {
    id: number;
    illness: string;
    description: string;
}

export interface CategoryType {
    id: number;
    title: string;
}

export interface AnswerType {
    question: string;
    answer: string;
}
export interface Recommendation {
    disease: DiseaseType;
    risk_factor: number
    prescription: string
}

export interface Statistics {
    country: Region[]
    your_region: LocalRegion[]
}