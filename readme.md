Original Video Tutorial for this project can be found at: https://www.youtube.com/watch?v=0mrguRPgCzI

Follow up tutorial found at: https://youtu.be/V-dBmuRsW6w

Make sure your DB has this table created:

```
CREATE TABLE `redirects` (
	`slug` varchar(10) NOT NULL,
	`url` varchar(1000) NOT NULL,
	PRIMARY KEY (`slug`)
) ENGINE InnoDB,
  CHARSET utf8mb4,
  COLLATE utf8mb4_0900_ai_ci;
  ```
