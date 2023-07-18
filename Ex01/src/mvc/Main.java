package mvc;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

interface StateCallbackFunction {
	void setState(Map<String, Integer> obj);
}

class MyModel extends Model {
	int score;
	int score1;
	int score2;
	
	MyModel(int score, int score1,	int score2) {
		this.score = score;
		this.score1 = score1;
		this.score2 = score2;
	}
	
	public void setScore(int score, View v) {
		this.score = score;
		notifyData(v);
	}
	
	public void setScore1(int score, View v) {
		this.score1 = score;
		notifyData(v);
	}
	
	public void setScore2(int score, View v) {
		this.score2 = score;
		notifyData(v);
	}
	
	public int getScore1() {
		return this.score1;
	}
	
	public int getScore2() {
		return this.score2;
	}
}

class MyView1 extends View {
	public MyView1(Model model) {
		super(model);
	}
	
	@Override
	public void update() {
		MyModel myModel = (MyModel) model;
		System.out.println("myView1 update() score->" + myModel.score);
	}
}

class MyView2 extends View {
	int score1;
	
	public MyView2(Model model) {
		super(model);
		this.score1 = ((MyModel)model).getScore1();

	}
	
	@Override
	public void update() {
		MyModel myModel = (MyModel) model;
		if (score1 != ((MyModel)model).getScore1()) {
			System.out.println("myView2 update() score1->" + myModel.score1);
			this.score1 = ((MyModel)model).getScore1();
		}
	}
	
	
}

class MyView3 extends View {
	int score2;
	
	public MyView3(Model model) {
		super(model);
		
		this.score2 = ((MyModel)model).getScore2();
		
		state.put("number", 1);
	}
	
	@Override
	public void update() {
		MyModel myModel = (MyModel) model;
		if (score2 != ((MyModel)model).getScore2()) {
			System.out.println("myView3 update() score2->" + myModel.score2);
			this.score2 = ((MyModel)model).getScore2();
		}
	}
	
	public void setScore10() {
		((MyModel) model).setScore(10, this);
	}
	
	List<StateCallbackFunction> callbackFunctions = new ArrayList<>();
	Map<String, Integer> state = new HashMap<>();
	
	public void setState(StateCallbackFunction callbackFunction) {
		callbackFunctions.add(callbackFunction);
	}
	
	public void backgroundProcess() {
		for (StateCallbackFunction callbackFunction : callbackFunctions) {
			callbackFunction.setState(state);
		}
	}
}

public class Main {

	public static void main(String[] args) {
		MyModel model = new MyModel(10, 20, 30);
		MyView1 v1 = new MyView1(model);
		MyView2 v2 = new MyView2(model);
		MyView3 v3 = new MyView3(model);
		
		model.addView(v1);
		model.addView(v2);
		model.addView(v3);
		
		v3.setScore10();
		v3.setState(obj -> obj.put("number", obj.get("number") + 1));
		v3.setState(obj -> obj.put("number", obj.get("number") + 1));
		System.out.println("v3.state.number->" + v3.state.get("number"));
		System.out.println("v3.state.number->" + v3.state.get("number"));

		v3.backgroundProcess();
		//render()
		System.out.println("v3.state.number->" + v3.state.get("number"));
		System.out.println("v3.state.number->" + v3.state.get("number"));
	}

}
