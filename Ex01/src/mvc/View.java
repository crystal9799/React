package mvc;

public abstract class View {
	protected Model model;
	
	public View(Model model) {
		this.model = model;
	}
	
	public abstract void update();
}
