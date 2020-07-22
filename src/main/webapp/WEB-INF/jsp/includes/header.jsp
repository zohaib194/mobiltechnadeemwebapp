<%@taglib prefix="jstl" uri="http://java.sun.com/jsp/jstl/core" %>

<div class="Header">
    <div id="logo">
        <img src="<jstl:url value='/resources/static/images/finallogoWhite.png'/>" alt="It is a compnay logo" class="Logo">
    </div>
    <div class="NavContent">
        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">PRODUCTS</a>
        <div class="dropdown-menu">
            <div class="dropright">
                <button class="btn btn-light dropdown-toggle" data-toggle="dropdown" id="dropDownBtn">Spare parts &#8250;</button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Apple</a>
                    <a class="dropdown-item" href="#">Samsung</a>
                    <a class="dropdown-item" href="#">Hauwei</a>
                </div>
            </div>
            <div class="dropright">
                <button class="btn btn-light dropdown-toggle" data-toggle="dropdown" id="dropDownSecondBtn">Accessories &#8250;</button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Link 1</a>
                    <a class="dropdown-item" href="#">Link 2</a>
                    <a class="dropdown-item" href="#">Link 3</a>
                </div>
            </div>
        </div>
        <p id="navLinkAboutUs">ABOUT US</p>
        <p id="navLinkContact">CONTACT</p>
    </div>
    <div class="UserRegisterAndLogin">
        <i class="fa fa-user" style="font-size:36px; padding-right:1rem" data-toggle="modal" data-target="#exampleModalCenterLogin"></i>
        <i class="fa fa-users" style="font-size:36px" data-toggle="modal" data-target="#exampleModalCenter"></i>
    </div>
    <jsp:include page="registerUser.jsp"/>
    <jsp:include page="login.jsp" />
</div>