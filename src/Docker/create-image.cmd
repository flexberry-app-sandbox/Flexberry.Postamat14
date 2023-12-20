docker build --no-cache -f SQL\Dockerfile.PostgreSql -t postamat14/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t postamat14/app ../..
