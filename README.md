# node.js-crud-api
node.js ile crud api projesi

mysql kullanarak node.js express kütüphanesiyle kullanarak crud api geliştirme projesi


## projedeki request method'lari
```
GET /api/v1/employee
GET /api/v1/employee/:id
POST /api/v1/employee
PUT /api/v1/employee/:id
DELETE /api/v1/employee/:id
```

## projede kullandığım veri tabanı ve tablosu

```sql
CREATE DATABASE node_mysql_crud_db;

CREATE  TABLE IF NOT EXISTS `employees` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(50) NOT NULL,
  `organization` VARCHAR(255) NOT NULL,
  `designation` VARCHAR(100) NOT NULL,
  `salary` DECIMAL(11,2) UNSIGNED DEFAULT 0.00,
  `status` TINYINT UNSIGNED DEFAULT 0,
  `is_deleted` TINYINT UNSIGNED DEFAULT 0,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
```

> yardığm aldığım kaynak:
https://www.youtube.com/watch?v=zgQq-gNvKH0&t=2298s
