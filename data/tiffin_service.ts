export type Address = {
    address_line?: string
    address_line2?: string
    city: string;
    state: string;
    country: string;
}

export type Contact = {
    name: string,
    mobileNo: string
}

export type Tiffin = {
    name: string,
    details?: string,
    address: Address,
    contacts: Contact[]
}

export const tiffin_service_data: Tiffin[] = [
    {
        name: 'BJP Bhavnagar - Rajeev Pandya',
        details: 'Free tiffin service from 13th April. Please register name and address before 9 AM in morning and 5 PM in evening',
        address: {
            city: 'Bhavnagar',
            state: 'Gujarat',
            country: 'India'
        }, contacts: [{
            name: 'Mahipatbhai Trivedi',
            mobileNo: '+91-9377537100'
        },
        {
            name: 'Pranjalbhai Desai',
            mobileNo: '+91-7567260638'
        },
        {
            name: 'Hardipbhai Jambucha',
            mobileNo: '+91-9879535300'
        }]
    },
];
