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

        <div class="NewProducts-Section">
            <h2> ${Title} </h2>
            <div class="NewProducts-Section-Products">

                <jstl:forEach var="prod" items="${Products}">
                    <div class="NewProducts-Section-Products-Product">
                        <div class="NewProducts-Section-Products-Product-Title-Image-Container">
                            <img src="${prod.imageURL}" alt="product" width=250 height=250>
                            <h5> ${prod.name} </h5>
                        </div>
                        <svg width="250" height="42" viewBox="0 0 250 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g style="mix-blend-mode:darken">
                                <rect width="248" height="32" rx="1" fill="#DDDDDD"/>
                            </g>
                            <path d="M125.5 41.9844L115.541 31.4961H135.459L125.5 41.9844Z" fill="#DDDDDD"/>
                        </svg>

                    </div>
                </jstl:forEach>
            </div>
        </div>
        <jsp:include page="includes/footer.jsp"/>
    </body>

</html>