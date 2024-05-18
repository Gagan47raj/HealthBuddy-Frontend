export const brands = [
    "cipla",
    "drmorepen",
    "abbott",
    "mankind",
    "drreddy",
    "aurobindo",
    "zydus",
];

export const filters = [
    {
        id:"brand",
        name:"Brand",
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