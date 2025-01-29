import CreateAccountDrawer from "@/components/create-account-drawer";
import {PlusCircle} from "lucide-react";
import {Card} from "@/components/ui/card";
import {getUserAccounts} from "@/actions/dashboard";
import AccountCard from "@/app/(main)/dashboard/_components/account-card";

export default async function Dashboard() {
    const accounts = await getUserAccounts()
    return (
        <div className={"px-5"}>
            {/*Budget Progress*/}

            {/* Dashboard Overview*/}

            {/* Account Grid*/}
            <div className={"grid gap-4 md:grid-cols-2 lg:grid-cols-3"}>
                <CreateAccountDrawer>
                    <Card
                        className="w-full py-8 flex flex-col items-center justify-center gap-4 cursor-pointer border border-dashed hover:border-primary hover:bg-primary/5 transition-all group"
                    >
                        <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <PlusCircle className="w-6 h-6 text-primary"/>
                        </div>
                        <p className="text-lg font-medium text-muted-foreground group-hover:text-primary transition-colors">
                            Add Account
                        </p>
                    </Card>

                </CreateAccountDrawer>
                {
                    accounts.length > 0 && accounts?.map((account) => {
                        return <AccountCard key={account.id} account={account} />;
                    })
                }
            </div>
        </div>
    );
}
