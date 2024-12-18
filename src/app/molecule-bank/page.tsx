import ComponentHeader from "@/components/ComponentHeader/ComponentHeader"
import DefaultLayout from "@/components/Layout/DefaultLayout"
import MoleculeBankTable from "@/components/MoleculeBank/MoleculeBankTable"

 
const Page = () => {
    return (
        <DefaultLayout>
            <ComponentHeader pageName="Molecule Bank"
            containActionButton={false}/>
            <div className="flex flex-col gap-10">
                <MoleculeBankTable/>
            </div>
        </DefaultLayout>
    );
};

export default Page;