import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { useState, createContext} from "react";

interface ChatDisease {
    disease: string;
    similarity_score: number;
    id:number;
    type:'medication' | 'disease';
}

interface ChatMed {
    medicine: string;
    similarity_score: number;
    id:number;
    type:'medication' | 'disease';
}

interface MyContext {
    Medication: "medication" | 'disease';
    setDisease: React.Dispatch<React.SetStateAction<"medication" | 'disease'>>;
    ChatDiseaseData: ChatDisease[];
    ChatMedData: ChatMed[];
    MedicineData: (data: any) => void;
    DiseaseData: (data:any)=> void;
    Loading:boolean;
    setLoading:React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext<MyContext | undefined>(undefined)

export const MDstate = ({ children }: { children: ReactJSXElement }) => {

    const [Medication, setDisease] = useState<'medication' | 'disease'>('medication')
    const [Loading,setLoading] = useState(false)
    const [ChatDiseaseData, setChatDiseaseData] = useState<ChatDisease[]>([])
    const [ChatMedData, setChatMedData] = useState<ChatMed[]>([])

    const DiseaseData = (data:any) =>{
        setChatDiseaseData(data)
        setLoading(false)
    }

    const MedicineData = (data:any) =>{
        setChatMedData(data)
        setLoading(false)
    }

    return (
        <UserContext.Provider value={{ Medication, setDisease, ChatDiseaseData, DiseaseData, Loading, setLoading, MedicineData, ChatMedData}}>
            {children}
        </UserContext.Provider>
    )
}
