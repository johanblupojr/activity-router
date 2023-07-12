import TextDetails from "../components/TextDetails";
import Quote from "../components/Quote"
import FacebookMessengerChat from "../components/messenger1";

export default function Home(){
    return (
    <>
    <FacebookMessengerChat pageId={"104588581239094"}/>
    <TextDetails />
    <Quote />
    </>
    )
}