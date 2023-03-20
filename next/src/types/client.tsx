export interface Client {
    id: string;
    avatar: string;
    email: string;
    fullName: string;
    sex: string,
    birthday: Date;
    supportTier: 'standard' | 'gold' | 'platinum';
    hourlyRate: number;
};