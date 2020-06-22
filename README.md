# Camaro Memory Allocation Error

Test project to go alongside [issue #113](https://github.com/tuananh/camaro/issues/113) which seems to indicate a memory leak within the library.

To reproduce the error:

* Used Node 12.16.2
* Run `jest --watch --runInBand --detectOpenHandles`
* Re-run all tests repeatedly until the `RangeError: WebAssembly.Memory(): could not allocate memory` error occurs

> NOTE: Reproducing the error takes a bunch of times before occuring, presumably before the heap is exhausted. Takes about 10 times for me.

## Notes

The real project where the error occurs is using [NestJS](https://nestjs.com) so I chose to create a new project using its project generator to ensure as much as possible was the same as the real project.

* `orders.xml` data taken from here: http://aiweb.cs.washington.edu/research/projects/xmltk/xmldata/www/repository.html
