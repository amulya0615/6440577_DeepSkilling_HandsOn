public class Main {

    // Recursive method to calculate future value
    public static double predictFutureValue(double presentValue, double growthRate, int years) {
        // Base case: if years == 0, return present value
        if (years == 0) {
            return presentValue;
        }

        // Recursive case
        return (1 + growthRate) * predictFutureValue(presentValue, growthRate, years - 1);
    }

    // Optimized version using memoization (to avoid redundant computation)
    public static double predictFutureValueMemo(double presentValue, double growthRate, int years, double[] memo) {
        if (years == 0) return presentValue;
        if (memo[years] != 0) return memo[years];

        memo[years] = (1 + growthRate) * predictFutureValueMemo(presentValue, growthRate, years - 1, memo);
        return memo[years];
    }

    public static void main(String[] args) {
        double presentValue = 10000; // ₹10,000
        double growthRate = 0.10;    // 10% annual growth
        int years = 5;

        System.out.println("Recursive Forecast:");
        double futureValue = predictFutureValue(presentValue, growthRate, years);
        System.out.printf("Future Value after %d years: ₹%.2f\n", years, futureValue);

        System.out.println("\nMemoized Recursive Forecast:");
        double[] memo = new double[years + 1];
        double futureValueMemo = predictFutureValueMemo(presentValue, growthRate, years, memo);
        System.out.printf("Future Value after %d years: ₹%.2f\n", years, futureValueMemo);
    }
}
