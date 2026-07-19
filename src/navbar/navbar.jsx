import React from 'react';
import './navbar.css';

export default class Navbar extends React.Component {

    constructor() {
        super();
        console.log("Navbar constructor"); //1
        this.state = {
            name: "mohamed",
            title: "dev"
        };
    }

    componentDidMount() {
        console.log("from Navbar componentDidMount"); //3
        this.setState({name: "sa3d"})
    }

    componentDidUpdate() {
        console.log("Navbar componentDidUpdate"); //5
    }

    componentWillUnmount() {
        console.log("Navbar componentWillUnmount"); //6 clean up
    }

    render() {
        console.log("Navbar render"); //2
        return (
            <nav className="navbar">
                <h1 className="navbar__title">My React App(navbar)</h1>
            </nav>
        );
    }   
}
    
// الترقيم دا هو ترتيب الاوتبوت عشان لما بيتم استدعاء الكونستركتور الاول وبعدها الريندر وبعدها الكومبوننت دايد ماونت
// 1- بيتم استدعاء الكونستركتور الاول عشان يجهز الكومبوننت بالبيانات اللي محتاجها
// 2- بعد كدا بيتم استدعاء الريندر عشان يعرض الكومبوننت في المتصفح
// 3- بعد كدا بيتم استدعاء الكومبوننت دايد ماونت عشان يشتغل بعد ما الكومبوننت يتم عرضه في المتصفح ويقدر يعمل اي حاجه بعد العرض زي جلب بيانات من سيرفر او اي حاجه تانيه
// يعني باختصار لازم الديدماونت يكون بعد الريندر عشان اضمن ان الكومبوننت تم عرضه في المتصفح قبل ما ابدأ اشتغل في اي حاجه تانيه بعد العرض 
/**
 * نعرض الكومبوننت أولاً (حتى لو فاضي أو فيه Loading)، وبعدين نجيب الداتا في componentDidMount.
 * لماذا نعمل كده؟
 
React يحب يرسم الكومبوننت أولاً (render).
componentDidMount يشتغل مرة واحدة فقط بعد أول render.
لما نغير الـ state بـ this.setState()، React بيعمل re-render مرة تانية (مع الداتا الجديدة).
 
يعني:
 
Render 1 → يظهر "جاري التحميل..."
componentDidMount → يجيب الداتا
Render 2 → يظهر الداتا النهائية
 */
