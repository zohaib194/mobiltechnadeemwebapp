<%@taglib prefix="jstl" uri="http://java.sun.com/jsp/jstl/core" %>


<div class="Header">
    <div id="logo">
        <img src="<jstl:url value='/resources/static/images/finallogoWhite.png'/>" alt="It is a compnay logo" class="Logo">
    </div>
    <div class="NavContent">
        <p>PRODUCTS</p>
        <p id="aboutUsInNav">ABOUT US</p>
        <p>CONTACT</p>
    </div>
    <div class="UserRegisterAndLogin">
        <i class="fa fa-user" style="font-size:36px; padding-right:1rem"></i>
        <i class="fa fa-users" style="font-size:36px" data-toggle="modal" data-target="#exampleModalCenter" id="RegButton"></i>
    </div>
    <jsp:include page="registerUser.jsp"/>

</div>