export type Address = {
    address_line?: string
    address_line2?: string
    city: string;
    state: string;
    country: string;
}
export type Tiffin = {
    name: string,
    details?: string,
    address: Address,
    contactNos: string[]
}

export const tiffin_service_data: Tiffin[] = [
    {
        name: 'Some 1',
        address: {
            city: 'Ahmedabad',
            state: 'Gujarat',
            country: 'India'
        }, contactNos: ['1234567890']
    },
    {
        name: 'Some 2',
        address: {
            city: 'Ahmedabad',
            state: 'Gujarat',
            country: 'India'
        }, contactNos: ['1234567892']
    },
    {
        name: 'Some 3',
        address: {
            city: 'Mumbai',
            state: 'Maharashtra',
            country: 'India'
        }, contactNos: ['1234567893']
    }
];
