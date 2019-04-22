# Accessories
## Serial cable
The 3-pin serial JST-ZH header has ground closest to the mounting hole with RX next and TX furthest away. There are several cable options available. Further, Embest has developed a JTT-ZH to 100-mil male header for connection to a standard [FTDI cable](https://www.amazon.com/FTDI-Cable-5V-VCC-3-3V-I/dp/B00DJBPIGI).
* [Pololu 30xm fly-lead](https://www.pololu.com/product/2411)
* [Amazon female-to-female](https://www.amazon.com/1-5MM-Female-Double-Connector-Cable/dp/B075CBGM9P)
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