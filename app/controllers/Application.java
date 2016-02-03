package controllers;

import play.mvc.Controller;
import play.mvc.Result;

public class Application extends Controller {

	public static Result signin() {	
		return ok("Success");
	}

}
