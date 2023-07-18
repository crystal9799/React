import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Hello {

	public static void main(String[] args) {
		List<String> array = new ArrayList<>();
		array.add("눈사람");
		array.add("얼음");
		array.add("눈");
		array.add("바람");

		List<String> newList = new ArrayList<>();
		
		for (String s : array) {
			newList.add("<li>" + s + "</li>");
		}
		
		List<String> newArray = array.parallelStream()
				.map(s -> "<li>" + s + "</li>")
				.collect(Collectors.toList());

		List<Integer> array2 = new ArrayList<>();
		array2.add(1);
		array2.add(2);
		array2.add(3);
		array2.add(4);
		array2.add(5);
		array2.add(6);
		
		//이것과
		List<Integer> newArray2 = new ArrayList<>();
		for (int v : array2) {
			if (v % 2 == 0) {
				newArray2.add(v);
			}
		}
		//이게 같은 기능
		List<Integer> newArray3 = array2.stream().filter(v -> v % 2 == 0).toList();
		
	}

}
