
export const filters = [
    {
        id:"diesease",
        name:"Diesease",
        options:[
            { value: "acne", label: "Acne" },
            { value: "aids", label: "AIDS" },
            { value: "alcoholic hepatitis", label: "Alcoholic hepatitis" },
            { value: "allergy", label: "Allergy" },
            { value: "arthritis", label: "Arthritis" },
            { value: "bronchial asthma", label: "Bronchial Asthma" },
            { value: "cervical spondylosis", label: "Cervical spondylosis" },
            { value: "chicken pox", label: "Chicken pox" },
            { value: "chronic cholestasis", label: "Chronic cholestasis" },
            { value: "common cold", label: "Common Cold" },
            { value: "dengue", label: "Dengue" },
            { value: "diabetes", label: "Diabetes" },
            { value: "dimorphic hemmorhoids (piles)", label: "Dimorphic hemmorhoids (piles)" },
            { value: "drug reaction", label: "Drug Reaction" },
            { value: "fungal infection", label: "Fungal infection" },
            { value: "gastroenteritis", label: "Gastroenteritis" },
            { value: "gerd", label: "GERD" },
            { value: "heart attack", label: "Heart attack" },
            { value: "hepatitis a", label: "Hepatitis A" },
            { value: "hepatitis b", label: "Hepatitis B" },
            { value: "hepatitis c", label: "Hepatitis C" },
            { value: "hepatitis d", label: "Hepatitis D" },
            { value: "hepatitis e", label: "Hepatitis E" },
            { value: "hyperthyroidism", label: "Hyperthyroidism" },
            { value: "hypertension", label: "Hypertension" },
            { value: "hypoglycemia", label: "Hypoglycemia" },
            { value: "hypothyroidism", label: "Hypothyroidism" },
            { value: "impetigo", label: "Impetigo" },
            { value: "jaundice", label: "Jaundice" },
            { value: "malaria", label: "Malaria" },
            { value: "migraine", label: "Migraine" },
            { value: "osteorthristis", label: "Osteoarthristis" },
            { value: "paralysis (brain hemorrhage)", label: "Paralysis (brain hemorrhage)" },
            { value: "peptic ulcer disease", label: "Peptic ulcer disease" },
            { value: "psoriasis", label: "Psoriasis" },
            { value: "pneumonia", label: "Pneumonia" },
            { value: "typhoid", label: "Typhoid" },
            { value: "urinary tract infection", label: "Urinary tract infection" },
            { value: "(vertigo) paroxysmal positional vertigo", label: "(Vertigo) Paroxysmal Positional Vertigo" },
            { value: "varicose veins", label: "Varicose veins" }
        ]
    },
    {
        id:"category",
        name:"Category",
        options:[
            {value:"cipla",label:"Cipla"},
            {value:"drmorepen",label:"Dr.morepen"},
            {value:"abbott",label:"Abbott"},
            {value:"mankind",label:"Mankind"},
            {value:"drreddy",label:"Dr.Reddy"},
            {value:"aurobindo",label:"Aurobindo"},
            {value:"zydus",label:"Zydus"},
        ]
    },

    {
        id:"price",
        name:"Price",
        options:[
            {value:"50-100",label:"50-100"},
            {value:"100-200",label:"100-200"},
            {value:"200-300",label:"200-300"},
            {value:"300-400",label:"300-400"},
            {value:"400-500",label:"400-500"},
            {value:"500-600",label:"500-600"}
        ]
    },

    {
        id:"rating",
        name:"Rating",
        options:[
            {value:"1",label:"1"},
            {value:"2",label:"2"},
            {value:"3",label:"3"},
            {value:"4",label:"4"},
            {value:"5",label:"5"},
        ]
    },

    {
        id:"availability",
        name:"Availability",
        options:[
            {value:"In Stock",label:"In Stock"},
            {value:"Out of Stock",label:"Out of Stock"}
        ]
    },
]

export const singleFilter=[
    {
    id:"price",
        name:"Price",
        options:[
            {value:"50-100",label:"50-100"},
            {value:"100-200",label:"100-200"},
            {value:"200-300",label:"200-300"},
            {value:"300-400",label:"300-400"},
            {value:"400-500",label:"400-500"},
            {value:"500-600",label:"500-600"}
        ]
    }
]

export const sortBy = [
    {name : "Price: Low to High", query:"price_low", current:false},
    {name : "Price: Hign to Low", query:"price_high", current:false}
]