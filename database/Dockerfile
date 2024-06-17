# Use the official MySQL image
FROM mysql:latest

# Environment variables for MySQL
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=supermarkedb
ENV MYSQL_PASSWORD=root

# Expose port 3306 to the outside world
EXPOSE 3306

# Copy the SQL script to initialize the database
COPY ./db.sql /docker-entrypoint-initdb.d/