package no.mobiletechnadeem.webapp.controller;

import no.mobiletechnadeem.webapp.service.WelcomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class WelcomeController {

    @Autowired
    WelcomeService welcomeService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String welcomePage(Model model){

        model.addAttribute("Title", "New Products");

        model.addAttribute("Products", welcomeService.getAllProducts());

        return "welcome";
    }

}
