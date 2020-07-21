<%@taglib prefix="jstl" uri="http://java.sun.com/jsp/jstl/core" %>


<div class="Header">
    <div id="logo">
        <img src="<jstl:url value='/resources/static/images/finallogoWhite.png'/>" alt="It is a compnay logo" class="Logo">
    </div>
    <div class="NavContent">
        <p id="navLinkProducts">PRODUCTS</p>
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