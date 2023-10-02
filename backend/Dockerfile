FROM python:3.10.2

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV PYTHONPATH="/workspace/src:$PYTHONPATH"

WORKDIR /workspace

RUN apt-get update \
  && apt-get install -y --no-install-recommends build-essential

ENV RYE_HOME="/opt/rye"
ENV PATH="$RYE_HOME/shims:$PATH"

# RYE_INSTALL_OPTION is required to build.
# See: https://github.com/mitsuhiko/rye/issues/246
RUN curl -sSf https://rye-up.com/get | RYE_NO_AUTO_INSTALL=1 RYE_INSTALL_OPTION="--yes" bash

COPY pyproject.toml requirements.lock requirements-dev.lock .python-version README.md ./

RUN rye add gunicorn
RUN rye sync --no-dev

COPY . .

RUN python manage.py migrate
RUN python manage.py collectstatic --no-input

EXPOSE 8000
CMD ["rye", "run", "gunicorn", "app.wsgi", "--bind", "0.0.0.0:8000"]