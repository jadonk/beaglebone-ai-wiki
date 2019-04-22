# Extra included software
### Pinmux status script: show-pins.pl

Created by Matthijs van Duin of Dutch & Dutch, show-pins.pl is a Perl script that provides the easiest way to observe the status of the pinmuxes. It reads the kernel debugfs information on the pinmux status and maps it against a table of the modes matched with the cape header pins or other board function.

* Source: https://github.com/RobertCNelson/boot-scripts/blob/master/device/bone/show-pins.pl
* Target location: /opt/scripts/device/bone/show-pins.pl
* Example execution:

```sh
sudo perl /opt/scripts/device/bone/show-pins.pl -vv
```