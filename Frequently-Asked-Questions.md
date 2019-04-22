# Kernel status
## Upstream
## -ti LTS kernels
### [4.9.147-ti-r120](https://github.com/beagleboard/linux/commit/1a5e38ab998448a2f8c9fa2d25f6d4ce02f5d5aa)
* Works pretty well, with some gaps to be documented here
* Requires an out-of-tree build of WiFi driver, currently being built with buildroot, but working on integrating the build in with Robert's patches

# Extra included software
### Pinmux status script: show-pins.pl

Created by Matthijs van Duin of Dutch & Dutch, show-pins.pl is a Perl script that provides the easiest way to observe the status of the pinmuxes. It reads the kernel debugfs information on the pinmux status and maps it against a table of the modes matched with the cape header pins or other board function.

* Source: https://github.com/RobertCNelson/boot-scripts/blob/master/device/bone/show-pins.pl
* Target location: /opt/scripts/device/bone/show-pins.pl
* Example execution:

```sh
sudo perl /opt/scripts/device/bone/show-pins.pl -vv
```