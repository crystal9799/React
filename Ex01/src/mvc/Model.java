package mvc;
import java.util.*;

public class Model {
	//view관리 배열 
	List<View> array = new ArrayList<>();
	
	//view 추가 
	public void addView(View v) {
		if (array.stream().noneMatch(item -> item.equals(v))) {
			array.add(v);
		}
	}
	
	//view 삭제
	public void removeView(View v) {
		for (View item : array) {
			if (item.equals(v)) {
				array.remove(item);
				break;
			}
		}
	}
	
	//데이터 변화 통지  
	public void notifyData(View v) {
		for (View item : array) {
			//데이터 변경을 view에 알린다
			if (!item.equals(v)) item.update();
		}
	}
}
