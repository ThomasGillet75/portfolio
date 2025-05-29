import Layout from "../UI/organisms/layout/Layout.tsx";
import Text from "../UI/atoms/Text/Text.tsx";
import MainTemplate from "../templates/MainTemplate/MainTemplate.tsx";


function HomePage() {
    return (
        <MainTemplate>
            <div className="page-container">
                <Text text="Thomas Gillet"/>
                <Layout/>
            </div>
        </MainTemplate>

    )
}

export default HomePage;