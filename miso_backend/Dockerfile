FROM ruby:3.1.0
RUN apt-get update
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY Gemfile /usr/src/app/Gemfile
COPY Gemfile.lock /usr/src/app/Gemfile.lock

RUN bundle install
COPY . /usr/src/app

RUN chmod +x /usr/src/app/entrypoint.sh
CMD ["/usr/src/app/entrypoint.sh"]
