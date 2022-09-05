
export const initialState = {
    year : null,
    month : {
        name : '',
        index: null,
    },
    day : null,
    dynamic_month : 8,
    data : [
                {
                    name : 'Ocak',
                    total_days : 31,
                    skip_days : 5
                    },
                {
                    name : 'Şubat',
                    total_days : 28,
                    skip_days : 1
                    },
                {
                    name : 'Mart',
                    total_days : 31,
                    skip_days : 1
                    },
                {
                    name : 'Nisan',
                    total_days : 30,
                    skip_days : 4
                    },
                {
                    name : 'Mayıs',
                    total_days : 31,
                    skip_days : 6
                    },
                {
                    name : 'Haziran',
                    total_days : 30,
                    skip_days : 2
                    },
                {
                    name : 'Temmuz',
                    total_days : 31,
                    skip_days : 4
                    },
                {
                    name : 'Ağustos',
                    total_days : 31,
                    skip_days : 0
                    },
                {
                    name : 'Eylül',
                    total_days : 30,
                    skip_days : 3
                    },
                {
                    name : 'Ekim',
                    total_days : 31,
                    skip_days : 5
                    },
                {
                    name : 'Kasım',
                    total_days : 30,
                    skip_days : 1
                    },
                {
                    name : 'Aralık',
                    total_days : 31,
                    skip_days : 3
                    }
            ]
}
 const reducer = (state, action) =>{
    console.log(action.payload)
    switch(action.type){
        case 'SET_CALENDAR' : 
        return{
            ...state,
            year : action.payload.year,
            month :action.payload.month,
            dynamic_month : action.payload.month.index,
            day : action.payload.day
        }
        case 'SET_MONTH' :
            return{
                ...state,
                dynamic_month : action.payload
            }
       
    }
}

export default reducer