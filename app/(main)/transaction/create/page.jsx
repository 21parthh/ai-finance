import {getUserAccounts} from "../../../../actions/dashboard";
import {defaultCategories} from "../../../../data/category";
import AddTransactionForm from "../_components/AddTransactionForm";

export default async function AddTransactionPage(){

    const accounts = await getUserAccounts()
    return (
        <div className="min-h-screen bg-background p-6 space-y-8">
            <h1 className="text-4xl font-bold tracking-tight text-white">
                Add Transaction
            </h1>
            <AddTransactionForm accounts={accounts} categories={defaultCategories}/>
        </div>
    )
}