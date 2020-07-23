<%@taglib prefix="jstl" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
    <head>
        <title>Web Application</title>
        <link href="webjars/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <script src="webjars/jquery/1.9.1/jquery.min.js"></script>
        <script src="webjars/bootstrap/3.3.6/js/bootstrap.min.js"></script>

        <link href="<jstl:url value='/resources/static/CSS/includes/header.css '/>" rel="stylesheet" />
        <link href="<jstl:url value='/resources/static/CSS/main.css '/>" rel="stylesheet" />
        <link href="<jstl:url value='/resources/static/CSS/includes/login.css '/>" rel="stylesheet" />
        <link href="<jstl:url value='/resources/static/CSS/includes/registerUserForm.css '/>" rel="stylesheet" />
        <link href="<jstl:url value='/resources/static/CSS/includes/footer.css '/>" rel="stylesheet" />

        <script src="<jstl:url value='/resources/static/JS/includes/header.js' />"></script>
    </head>

    <body>
        <jsp:include page="includes/header.jsp"/>

        <div class="NewProducts">
            <h2> ${Title} </h2>
            <jstl:forEach var="prod" items="${Products}">
                <jstl:out value="${prod.name}"/>
                <div class="Prod">
                    <img src="${prod.imageURL}" alt="product">
                </div>
            </jstl:forEach>

        </div>
        <jsp:include page="includes/footer.jsp"/>
    </body>

</html>