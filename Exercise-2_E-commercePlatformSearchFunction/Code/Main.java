public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(205, "Shoes", "Fashion"),
            new Product(150, "Book", "Education"),
            new Product(110, "Watch", "Accessories"),
            new Product(180, "Phone", "Electronics")
        };

        // Linear Search Test
        int searchId = 150;
        Product foundLinear = SearchAlgorithms.linearSearch(products, searchId);
        System.out.println("Linear Search Result:");
        System.out.println(foundLinear != null ? foundLinear : "Product not found.");

        // Sort and Binary Search Test
        SearchAlgorithms.sortById(products);
        Product foundBinary = SearchAlgorithms.binarySearch(products, searchId);
        System.out.println("\nBinary Search Result:");
        System.out.println(foundBinary != null ? foundBinary : "Product not found.");
    }
}

