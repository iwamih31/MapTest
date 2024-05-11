package com.iwamih31.MapTest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import jakarta.servlet.http.HttpSession;
import lombok.AllArgsConstructor;

@Controller
@AllArgsConstructor
@RequestMapping("/MapTest")
public class MapTestController {

	@Autowired
	private MapTestService service;
	@Autowired
	private HttpSession session;

	/** RequestMappingのURL */
	public String req() {
		return "/MapTest";
	}

	/** RequestMappingのURL + path */
	public String req(String path) {
		return req() + path;
	}

	/** このクラス内の@GetMapping(req() + path)へredirect */
	public String redirect(String path) {
		return "redirect:" + req() + path;
	}

	/** このクラス内の@GetMapping(req() + path)へforward */
	public String forward(String path) {
		return "forward:" + req() + path;
	}

	@GetMapping("/")
	public String index() {
		return redirect("/Main");
	}

	@GetMapping("/Main")
	public String main(
			Model model) {
		model.addAttribute("title", "メイン画面");
		model.addAttribute("req", req());
		model.addAttribute("app_name", req().replace("/", ""));
		return "main";
	}

	@GetMapping("/Start")
	public String start(
			RedirectAttributes redirectAttributes) {
		int[] map_X_Y = service.piece_Position("フィールドA 城A");
		int map_Number = map_X_Y[0];
		int x = map_X_Y[1];
		int y = map_X_Y[2];
//		Array map_Image = new Array();
//		map_Image.string_2 = service.map_Image(map_Number, x, y);
		String[][] map_Image = service.view_Map_Image(map_Number, x, y);
		redirectAttributes.addFlashAttribute("map_Image", map_Image);
		redirectAttributes.addAttribute("x", x);
		redirectAttributes.addAttribute("y", y);
		return redirect("/Map");
	}

	@PostMapping("/Map")
	public String map(
			@RequestParam("map_Image")Array map_Image,
			@RequestParam("x")int x,
			@RequestParam("y")int y,
			RedirectAttributes redirectAttributes) {
		redirectAttributes.addAttribute("map_Image", map_Image);
		redirectAttributes.addAttribute("x", x);
		redirectAttributes.addAttribute("y", y);
		return redirect("/Map");
	}

	@GetMapping("/Map")
	public String map(
			@RequestParam("x")int x,
			@RequestParam("y")int y,
			@ModelAttribute("map_Image") String[][] map_Image,
			Model model) {
		add_View_Data_(model, "summary");
		model.addAttribute("map_Image", map_Image);
		model.addAttribute("x", x);
		model.addAttribute("y", y);
		return "view";
	}


	/** view 表示に必要な属性データをモデルに登録 */
	private void add_View_Data_(Model model, String template, String title) {
		model.addAttribute("library", template + "::library");
		model.addAttribute("main", template + "::main");
		model.addAttribute("title", title);
		model.addAttribute("req", req());
		System.out.println("template = " + template);
	}

	/** view 表示に必要な属性データをモデルに登録 */
	private void add_View_Data_(Model model, String template) {
		model.addAttribute("library", template + "::library");
		model.addAttribute("main", template + "::main");
		model.addAttribute("req", req());
		System.out.println("template = " + template);
	}
}