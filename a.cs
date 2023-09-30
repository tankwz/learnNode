        public int CountGoodTriplets(int[] arr, int a, int b, int c)
        {
            // 0 <= i < j < k < arr.length
            int result = 0;
            for (int i = 0; i < arr.length() - 2; i++)
            {
                for (int j = i + 1; j < arr.length() - 1; j++)
                {
                    for (int k = j + 1; k < arr.length(); k++)
                    {
                        if (Math.Abs(arr[i] - arr[j] <= a))
                            if (Math.Abs(arr[j] - arr[k] <= b))
                                            if (Math.Abs(arr[i] - arr[k] <= c))
                                    result++;
                    }
                }

            }
            return result;
        }