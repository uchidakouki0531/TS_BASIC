//データ型に関するモジュール
export type User = {
    id: number;
    name: {
        first: string;
        last: string;
    },
    email: string;
    isActive: boolean;
}