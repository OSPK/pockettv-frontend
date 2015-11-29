from setuptools import setup

setup(
    setup_requires=['libsass >= 0.9.2'],
    sass_manifests={
        '': ('static/sass', 'static/css', '/static/css')
    }
)