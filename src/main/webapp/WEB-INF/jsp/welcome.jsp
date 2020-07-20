<%@taglib prefix="jstl" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
    <head>
        <title>First Web Application</title>
        <link href="<jstl:url value='/resources/static/css/footer.css '/>" rel="stylesheet" />
        <link href="<jstl:url value='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css '/>" rel="stylesheet">
    </head>

    <body>
        Hello World!!

        <jsp:include page="includes/footer.jsp"/>
    </body>

</html>